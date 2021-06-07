---
sidebar_position: 2
---

# Create a Form

Let's take you from zero to published in just a few minutes.

## Step 1. Log in

Visit the [AMPATH form builder](https://openmrs-spa.org/formbuilder/#/login) website. Type `/openmrs` in the **OpenMRS Server URL** field and then enter your login credentials to log in.

![Login page](/img/login.png)

## Step 2. Create a Form

Click the **Create New** button. You will be directed to the Schema Editor UI showing a basic form schema scaffold. A Form schema consists of pages, sections and questions. See the [Form](/platform/core-concepts#form) guide to learn more about Forms.

![Schema editor](/img/schema-editor.png)

Launch the **Schema Builder** by clicking the hamburger menu in the top-left of the page to begin constructing your schema. Type in `Test POC Patient Consent Form v1.0` as the name of your Form. Click the green tick when done to update the schema.

![Specify the name of the form](/img/add-form-name.png)

Presently, the Form name has to contain the word **POC** for it to be deemed valid. For example, **Test POC form** is a valid Form name whereas **Yet Another Test form** is not.

## Step 3. Add a page

Add a page by clicking `Create new page`. This should launch a modal where you can provide a page label. Let's add a page labelled `Consent Elicitation`.

![Add a page to the form](/img/add-page.png)

## Step 4. Add a section

Add a section by clicking `Create new section`. We'll add a section to the Form labelled `Consent`. Make sure to set `isExpanded` to `true` so the section doesn't get rendered in collapsed mode.

![Add a section to the form](/img/add-section.png)

## Step 5. Add a question

Add a question by clicking `Create new question`.

![Add a question to the form](/img/add-question.png)

This launches the **Question Editor** panel. Fill in the following information:

![Configure question options](/img/configure-question-options.png)

Enter `CONSENT` in the Concept field. This should launch the **Concept Search** modal.

![Concept search modal](/img/concept-modal.png)

Select `PATIENT CONSENT PROVIDED` from the dropdown.

![Select a concept](/img/select-concept.png)

A modal should now appear asking you to pick your desired Answers from a list of available Answers. Click **Select All** to choose both `YES` and `NO`.

![Select answers modal](/img/answers-modal.png)

Click **OK** to save. You should now see the associated Concept Mappings and the Answers you chose displayed in the Question Editor.

![Question editor showing concept mappings and answers](/img/concept-mappings-and-answers.png)

Click **OK** to save your form schema at this point. You should see an alert showing that the schema was updated successfully.

![Schema updated](/img/schema-updated.png)

## Step 6. Test your Form

You can test your Form at any point in the development process by clicking the **Render** button. Provided you have a valid Form schema defined, this will allow you to test your Form and see the visual representation of your Form schema without having to first publish the Form.

The schema above gets rendered as:

![Schema render](/img/schema-render.png)

## Step 7: Save your Form

When you're done working on your Form, you can save the Form by going to **File** and then clicking **Save to Server**. Doing so launches a modal asking you to enter details related to your Form.

![Save modal](/img/save-modal.png)

Press **OK** to save your Form, and then **Exit** to leave the schema editor.

You should now be able to see your new Form in the Forms List.
