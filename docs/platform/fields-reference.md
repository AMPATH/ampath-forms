---
sidebar_position: 2
---

# Field Types Reference

AMPATH forms support multiple field types. The most common fields include `text`, `textarea`, `number`, `date`, `select`, `radio` and `checkbox`.

Field types are defined in the `questionOptions` definition of a question using the following syntax:

```json
{
  "questionOptions": {
    "rendering": "" // field type goes here
  }
}
```

## text

Renders a text input.

Below is an example showing a text input. This is input is shown when `Other treatment methods e.g. Hysterectomy, Cone biopsy` is selected as the answer to the `Treatment method` question. This input allows the user to specify the treatment method chosen for that visit by typing text into the text field.

![Text field](/img/fields-reference/text.png)

The code for this is as follows:

```json
{
  "label": "Other treatment methods not listed above",
  "type": "obs",
  "id": "otherTreatmentMethod",
  "questionOptions": {
    "concept": "dc15823d-e6ec-48fc-beac-bc4239d9bfcb",
    "rendering": "text"
  },
  "validators": [],
  "hide": {
    "hideWhenExpression": "isEmpty(preCancerTreatment) || preCancerTreatment != 'a89ebb04-1350-11df-a1f1-0026b9348838'"
  }
},
```

## number

Renders a number input. You can specify optional `min` and `max` values in the `questionOptions` definition of a number input. When present, these serve as upper and lower bounds for constraining the provided input. Validation is automatically provided for min and max values.

Below is an example showing a couple of number inputs used to establish the number of pregnancies a patient and had (gravida), as well as the number of pregnancies had that have been brought to term (parity).

![Number field](/img/fields-reference/number.png)

The code for this is as follows:

```json
{
  "label": "Reproductive History",
  "isExpanded": "true",
  "questions": [
    {
      "label": "Number of pregnancies had (gravida)",
      "type": "obs",
      "id": "noPregnancy",
      "historicalExpression": "_.isEmpty(HD.getObject('prevEnc').getValue('a8aaf59a-1350-11df-a1f1-0026b9348838')) ? undefined : HD.getObject('prevEnc').getValue('a8aaf59a-1350-11df-a1f1-0026b9348838')",
      "questionOptions": {
        "concept": "a8aaf59a-1350-11df-a1f1-0026b9348838",
        "rendering": "number",
        "max": "50",
        "min": "0"
      },
      "validators": [],
      "hide": {
        "hideWhenExpression": "sex !== 'F'"
      }
    },
    {
      "label": "Number of pregnancies delivered (parity)",
      "type": "obs",
      "id": "noDelivery",
      "historicalExpression": "_.isEmpty(HD.getObject('prevEnc').getValue('a899a920-1350-11df-a1f1-0026b9348838')) ? undefined : HD.getObject('prevEnc').getValue('a899a920-1350-11df-a1f1-0026b9348838')",
      "questionOptions": {
        "concept": "a899a920-1350-11df-a1f1-0026b9348838",
        "rendering": "number",
        "min": "0"
      },
      "validators": [
        {
          "type": "js_expression",
          "failsWhenExpression": "!isEmpty(noPregnancy) && isEmpty(myValue) && noPregnancy < noDelivery))",
          "message": "Parity should not be greater than gravida."
        }
      ],
      "hide": {
        "hideWhenExpression": "sex !== 'F'"
      }
    }
  ]
}
```

## select

Renders a dropdown list.

Below is an example of a select field from a Cervical Cancer screening visit form. Clicking inside the field reveals a dropdown with a list of options. You can only select one option from a select field. If you wish to be able to select more than one option, use a multiCheckbox field instead.

![Select field](/img/fields-reference/select.png)

The code for this is as follows:

```json
{
  "questions": [
    {
      "label": "Treatment Plan",
      "sections": [
        {
          "label": "Pre-Cancer Treatment",
          "isExpanded": "true",
          "questions": [
            {
              "label": "Treatment method",
              "type": "obs",
              "id": "preCancerTreatment",
              "required": "true",
              "questionOptions": {
                "concept": "94f54710-6ee0-45cd-ad5f-a990fcb47bc1",
                "rendering": "select",
                "answers": [
                  {
                    "concept": "a899e0ac-1350-11df-a1f1-0026b9348838",
                    "label": "None"
                  },
                  {
                    "concept": "dcb72b0b-c1cb-4f32-aa82-e8f7b74cc16e",
                    "label": "Cryotherapy"
                  },
                  {
                    "concept": "b6fccd82-c622-4c3e-9563-39899e709b3b",
                    "label": "LEEP"
                  },
                  {
                    "concept": "a829a2a1-5ea5-400e-a3a5-2069f6d1e05b",
                    "label": "Thermocoagulation"
                  },
                  {
                    "concept": "a89ebb04-1350-11df-a1f1-0026b9348838",
                    "label": "Other treatment methods e.g. Hysterectomy, Cone biopsy"
                  }
                ]
              },
              "validators": []
            }
          ]
        }
      ]
    }
  ]
}
```

## date

Renders a date input. When clicked, the input reveals a date picker with the current date as the default value. You can optionally choose to a dropdown with a list of weeks in addition to the date picker. When specified, choosing a week from the weeks list will result in the datepicker adjusting to show the first date of that week as its default value.

Below is an example of a date field where you can specify the patient's return to clinic date.

![Date field](/img/fields-reference/date.png)

The code for this is as follows:

```json
{
  "label": "Next Appointment",
  "sections": [
    {
      "label": "Next Appointment",
      "isExpanded": "true",
      "questions": [
        {
          "label": "Return to clinic date",
          "type": "obs",
          "required": "true",
          "questionOptions": {
            "concept": "a8a666ba-1350-11df-a1f1-0026b9348838",
            "rendering": "date",
            "weeksList": [2, 4, 9, 13, 26, 52, 104, 156]
          },
          "validators": [
            {
              "type": "date",
              "allowFutureDates": "true"
            },
            {
              "type": "js_expression",
              "failsWhenExpression": "(new moment(encDate)).isAfter((new moment(myValue)), 'day') || (new moment(encDate)).isSame((new moment(myValue)), 'day')",
              "message": "Return to clinic date should be greater than the encounter date."
            }
          ]
        }
      ]
    }
  ]
}
```

## multiCheckbox

Renders a multiple-choice select field. This kind of field differs from a select in that it allows you to select more than one option.

Below is an example of a multiple-choice field showing three Cervical cancer screening methods as options: VIA or VIA/VILI, HPV, and Pap smear. From them, the image shows that `VIA or VIA/VILI` and `Pap smear` have been selected.

![Multi-Select field](/img/fields-reference/multi-select.png)

The code for this is as follows:

```json
{
  "label": "Routine Screening",
  "isExpanded": "true",
  "questions": [
    {
      "label": "Screening method",
      "type": "obs",
      "id": "screeningMethod",
      "required": "true",
      "questionOptions": {
        "rendering": "multiCheckbox",
        "concept": "6750ddf9-bd32-4d8f-bee0-b5fc192a20a3",
        "answers": [
          {
            "concept": "b6d3b6cf-030e-4e35-8a91-7e3efe7ecd65",
            "label": "VIA or VIA/VILI"
          },
          {
            "concept": "a89b2dcc-1350-11df-a1f1-0026b9348838",
            "label": "HPV"
          },
          {
            "concept": "a8983ff4-1350-11df-a1f1-0026b9348838",
            "label": "Pap smear"
          }
        ]
      },
      "validators": []
    }
    // ... more questions
  ]
}
```

## textarea

Renders a textarea input. By default, the textarea will be 18 rows tall. You can configure the number of visible text lines for the input by providing a number to the rows property in your questionOptions definition.

![Textarea field](/img/fields-reference/textarea.png)

The code for this is as follows:

```json
{
  "label": "Assessment",
  "sections": [
    {
      "label": "Assessment Notes",
      "isExpanded": "true",
      "questions": [
        {
          "label": "Please enter your assessment below",
          "type": "obs",
          "id": "assessmentNotes",
          "default": "",
          "questionOptions": {
            "concept": "23f710cc-7f9c-4255-9b6b-c3e240215dba",
            "rendering": "textarea",
            "rows": 10
          }
        }
      ]
    }
  ]
}
```

## radio

Renders a radio input.

## ui-select-extended

Renders a dropdown list with superpowers. You can hook this input up to a `DataSource` which will configure it behave like a search input with typeahead capabilities.

Below is an example of a ui-select-extended field hooked up to a resource that provides location data. The user can search for a location from the provided list by typing a few characters to filter the list.

![UI Select Extended field](/img/fields-reference/ui-select-extended.gif)

The code for this is as follows:

```json
{
  "label": "At which AMPATH facility are you receiving HIV care?",
  "id": "careLocation",
  "type": "personAttribute",
  "questionOptions": {
    "rendering": "ui-select-extended",
    "attributeType": "8d87236c-c2cc-11de-8d13-0010c6dffd0f"
  },
  "validators": [
    {
      "type": "js_expression",
      "failsWhenExpression": "isEmpty(myValue) && hivStatus == 'a899b35c-1350-11df-a1f1-0026b9348838'",
      "message": "Please indicate the facility where the client is receiving HIV care"
    }
  ],
  "hide": {
    "hideWhenExpression": "isEmpty(currentlyOnArt) || currentlyOnArt != 'a899b35c-1350-11df-a1f1-0026b9348838'"
  }
}
```

## group

TODO

## repeating

TODO

## drug

TODO

## file

TODO

## field-set

TODO

## problem

TODO
