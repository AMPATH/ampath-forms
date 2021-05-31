---
sidebar_position: 1
---

# Create a Form

Below is a quick walkthrough that will help you go from zero to published in just a few minutes.

## Step 1. Log in

Visit the [AMPATH form builder](https://openmrs-spa.org/formbuilder/#/login). Set the `OpenMRS Server URL` to `/openmrs` and log in.

![Login page](/img/login.png)

## Step 2. Create a form

Click the **Create New** button. You will be directed to the schema editor showing a basic form schema scaffold.

![Schema editor](/img/schema-editor.png)

Begin by changing the name of the form. Presently, the form name has to contain the word **POC** for it to be deemed valid. For example, **Test POC form** is a valid form name whereas **Yet Another Test form** is not.

Add pages to your form schema. Pages are specified in the **pages** array. A page is made up of sections. The most basic page definition consists of a **label** and a **sections** array. Enter this page definition into the schema editor.

```json
{
  "pages": [
    {
      "label": "Page label goes here",
      "sections": [
        {
          "questions": [
            {
              "label": "Question label goes here",
              "id": "Unique ID for this question",
              "questionOptions": {
                "rendering": "text"
              }
            }
          ]
        }
      ]
    }
  ]
}
```

## Step 3. Test your form

You can test your form at any point in the development process by clicking the **Render** button. Provided you have a valid form schema defined, this will allow you to test your form and see the visual representation of your form schema without having to first publish the form. The schema above gets rendered as:

![Schema render](/img/schema-render.png)

## Step 4. Add questions to your form (Optional)

You can add more questions to your form schema. Questions are scoped to a **section** in the schema. They are specified in the **questions** array of a section definition. A section definition can contain an arbitrary number of questions.

More details on what constitutes a question definition can be found in the [Question](/platform/concepts#question) reference.

## Step 5: Save your form

When you're done working on your form, you can save the form by going to **File** and then clicking **Save to Server**. Doing so launches a modal asking you to enter details related to your form.

![Save modal](/img/save-modal.png)

Press **OK** to save your form, and then **Exit** to leave the schema editor.

You should now be able to see your new form in the forms list.
