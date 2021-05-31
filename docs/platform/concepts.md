---
sidebar_position: 1
---

# Core Concepts

AMPATH forms provide a powerful structure for working with forms and data.

This guide will walk you through the underlying core concepts.

## **Form**

A form is a set of form fields represented by a JSON schema. Form schemas are constructed using the form builder. When you launch the form builder to create a new form, you'll be presented with a basic form scaffold. This scaffold has the following structure:

```json
{
  "name": "",
  "pages": [],
  "processor": "EncounterFormProcessor",
  "uuid": "xxxx",
  "referencedForms": []
}
```

You can think of the above as follows:

- **name** - the name of the form. This is how the form will appear in the form builder. Presently, form names must contain the name **POC** to be considered valid.
- **uuid** - the unique UUID of this form. This will be provided automatically upon saving the form.
- **processor** -
- **referencedForms** - the referenced forms array is populated when you use the **Reference Forms** feature in the form builder. This feature allows you to build complex forms by importing logic from **component** forms in the form builder. Components can be tailored to carry domain-specific information and lend themselves to reuse. They can be mixed and matched to create complex forms. For example, an HIV Testing form can import:

  - A lab results component that contains questions and answers related to lab results alone.
  - A Tuberculosis treatment component.
  - A Pre-Clinic review component, and so on.

  Once constructed, the referencedForms array looks something like this:

  ```json
  "referencedForms": [
   	{
  		"formName": "component_lab-orders",
  		"alias": "lo",
  		"ref": {
  			"uuid": "ba985719-b085-419c-a0c7-3f1c3e61dd3e",
  			"display": "Lab Orders Component"
  		}
  	},
    {
  		"formName": "component_art",
  		"alias": "art",
  		"ref": {
  			"uuid": "bd4ff44f-8007-49b0-b468-669fe0125093",
  			"display": "Anti-Retroviral Therapy Component"
  		}
  	},
  ]
  ```

- **pages** - the various pages that make up this form. Pages are a way to encapsulate form logic. You specify pages by adding them to the **pages** array. Pages are made up of sections. The most basic page definition consists of the page **label** and a **sections** array.

  ```json
  "pages": [
  	// A page
  	{
  		"label": "Encounter Details",
  		"sections": [
  			// Section definition goes here
  		]
  	},
  	{
  		// Another page
  		"label": "Pre-Clinic Review",
  		"sections": [
  			// Section definition goes here
  		]
  	}
  ]
  ```

## Page

Each page in your form schema gets rendered in a separate tab in the form viewer, so a page can be thought of as a way to encapsulate related form logic.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8a4e1026-26c5-4e57-af21-b17b4c9d4e62/Screenshot_2021-05-27_at_15.52.38.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8a4e1026-26c5-4e57-af21-b17b4c9d4e62/Screenshot_2021-05-27_at_15.52.38.png)

_Form pages shown as tabs at the top of the form. Switch tabs to go from page to page._

As mentioned above, the most basic page definition consists of the page **label** and a **sections** array. The label is what appears as the tab heading. A page is made up of sections. Below is a page containing three different sections, with the last section being collapsed.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c5ceb850-be58-48e9-8553-435025f0441b/Screenshot_2021-05-27_at_15.57.25.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c5ceb850-be58-48e9-8553-435025f0441b/Screenshot_2021-05-27_at_15.57.25.png)

## Section

A section is an element of a form that group together related questions. There are two ways to build section definitions in AMPATH forms:

1. Constructing the section definition 'manually' by providing a section **label** and a **questions** array:

   ```json
   {
     "pages": [
       {
         "label": "Encounter Details",
         "sections": [
           {
             "label": "Encounter Details",
             "isExpanded": "true",
             "questions": [
               {
                 "label": "Visit date",
                 "type": "encounterDatetime",
                 "required": "true",
                 "default": "",
                 "id": "encDate",
                 "questionOptions": {
                   "rendering": "date"
                 },
                 "validators": [
                   {
                     "type": "date"
                   }
                 ]
               },
               {
                 "type": "encounterProvider",
                 "label": "Provider",
                 "id": "provider",
                 "required": "true",
                 "default": "",
                 "questionOptions": {
                   "rendering": "ui-select-extended"
                 }
               },
               {
                 "type": "encounterLocation",
                 "label": "Facility name",
                 "id": "location",
                 "required": "true",
                 "questionOptions": {
                   "rendering": "ui-select-extended"
                 }
               }
             ]
           }
         ]
       }
     ]
   }
   ```

2. Referencing sections from forms 'imported in' using the **referenced forms** feature.

```json
// reference forms
"referencedForms": [
 	{
		"formName": "component_lab-orders",
		"alias": "lo",
		"ref": {
			"uuid": "ba985719-b085-419c-a0c7-3f1c3e61dd3e",
			"display": "Lab Orders Component"
		}
	},
  {
		"formName": "component_art",
		"alias": "art",
		"ref": {
			"uuid": "bd4ff44f-8007-49b0-b468-669fe0125093",
			"display": "Anti-Retroviral Therapy Component"
		}
	},
]

// and then use the references to build up sections
{
	"pages": [
		{
		  "label": "Plan",
		  "sections": [
		    {
		      "reference": {
		        "form": "lo",
		        "page": "Test orders",
		        "section": "Test Orders"
		      }
		    }
		  ]
		},
		{
		  "label": "Medication Plan",
		  "sections": [
		    {
		      "reference": {
		        "form": "art",
		        "page": "ART ",
		        "section": "ART Plan",
		        "excludeQuestions": [
		          "artStartedPed"
		        ]
		      }
		    }
		  ]
		}
	]
}

```

Sections will be rendered in collapsed mode by default. Set `isExpanded` \*\*\*\*to `true` in the section definition to render the section in expanded mode.

## Question

A question is a field in the form. All questions have a **label**, and **id**, a **rendering** type**,** and a set of **answers**.

```json
{
  "questions": [
    {
      "label": "Current HIV status",
      "type": "obs",
      "questionOptions": {
        "rendering": "select",
        "concept": "9e4d6436-4040-46a3-a0ae-6dbc0acfe593",
        "answers": [
          {
            "concept": "a896f3a6-1350-11df-a1f1-0026b9348838",
            "label": "HIV positive"
          },
          {
            "concept": "a896d2cc-1350-11df-a1f1-0026b9348838",
            "label": "HIV negative"
          },
          {
            "concept": "a899b50a-1350-11df-a1f1-0026b9348838",
            "label": "Unknown"
          }
        ]
      },
      "validators": []
    }
  ]
}
```

Below is a complete reference of the properties available in a question definition:

- **label** - the actual content of the question. This is what gets rendered as the question label.
- **id** - an ID unique to that question. Used when validating the field input.
- **questionOptions** - an object containing the following properties:

  - **rendering** - the field type of the question. The most common field types are **text** (for text inputs), **select** (for select fields) and **date** (for date fields). See the **Field types** reference below for a full list of rendering types.
  - **concept** - Optional. The concept UUID of the backing concept for this field.
  - **answers** - an array of answers scoped to a question. An answer definition consists of a concept UUID and label pair. Below is an example of answers to a `Current HIV status` question:

    ```json
    "answers": [
      {
        "concept": "a896f3a6-1350-11df-a1f1-0026b9348838",
        "label": "HIV positive"
      },
      {
        "concept": "a896d2cc-1350-11df-a1f1-0026b9348838",
        "label": "HIV negative"
      },
      {
        "concept": "a899b50a-1350-11df-a1f1-0026b9348838",
        "label": "Unknown"
      }
    ]
    ```

- **type** - Optional.
- **historicalExpression** - Optional. Allows you to hook your input up to the `HistoricalEncounterDataService`. This service 'remembers' the last value entered into an input from the latest encounter and offers the user the option to reuse that value.

  ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a14cc447-2483-4f35-9595-65b966be4582/Screenshot_2021-05-28_at_14.09.53.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a14cc447-2483-4f35-9595-65b966be4582/Screenshot_2021-05-28_at_14.09.53.png)

- **required** - Optional. If set to **true**, the field is treated as a required field. Defaults to **false**.
- **validators** - Optional. An array in which you provide validation logic for the specific question. See the **Validating form fields** reference below.
- **hide** - Optional. You can use this to define logic for hiding a question based on certain conditions.

  ```json
  "hide": {
    "hideWhenExpression": "onArt!== 'a899b35c-1350-11df-a1f1-0026b9348838'"
  }

  // This logic hides the question with the `onArt` id if the value of its
  // concept does not match the supplied value
  ```

- **questionInfo**
