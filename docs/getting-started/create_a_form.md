---
sidebar_position: 2
---

# Create a Form

Let's take you from zero to published in just a few minutes.

## Step 1. Log in

Visit the [AMPATH form builder](https://openmrs-spa.org/formbuilder/#/login). Set the `OpenMRS Server URL` to `/openmrs` and log in.

![Login page](/img/login.png)

## Step 2. Create a form

Click the **Create New** button. You will be directed to the Schema Editor page showing a basic form schema scaffold.

![Schema editor](/img/schema-editor.png)

Click the hamburger menu in the top-left of the page to begin constructing your schema.

![Hamburger menu](/img/hamburger-menu.png)

We'll type in `Test POC Exit Care Form v1.0` as the name of our form. Click the green tick when done to update the schema.

![Specify the name of the form](/img/add-form-name.png)

Presently, the form name has to contain the word **POC** for it to be deemed valid. For example, **Test POC form** is a valid form name whereas **Yet Another Test form** is not.

## Step 3. Add a page

Add a page to your form by clicking `Create new page`. This should launch a modal where you can provide a page label.

Let's add a page labelled `Exit Reason`.

![Add a page to the form](/img/add-page.png)

## Step 4. Add a section

Add a section to your form by clicking `Create new section`.

We'll add a section to the form labelled `Exit Reason`. Make sure to set `isExpanded` to `true` so the section doesn't get rendered in collapsed mode.

![Add a section to the form](/img/add-section.png)

## Step 5. Add a question

Add a question by clicking `Create new question`.

![Add a question to the form](/img/add-question.png)

This launches the Question Editor panel. Fill it in with the following information:

![Configure question options](/img/configure-question-options.png)

Enter `REASON EXITED CARE` in the Concept field. This should launch the Concept modal. Select `REASON EXITED CARE` from the dropdown. Select the following answers from the Answers panel:

- `Completed Program`
- `Treatment Complete`
- `Voluntary Exit`

Click OK to save. You should now see the associated Concept Mappings and the Answers you chose displayed in the Question Editor.

![Question editor showing concept mappings and answers](/img/concept-mappings-and-answers.png)

Click OK to save your form schema at this point. You should see an alert showing that the schema was updated successfully.

## Step 6. Test your form

You can test your form at any point in the development process by clicking the **Render** button. Provided you have a valid form schema defined, this will allow you to test your form and see the visual representation of your form schema without having to first publish the form.

The schema above gets rendered as:

![Schema render](/img/schema-render.png)

## Step 7: Save your form

When you're done working on your form, you can save the form by going to **File** and then clicking **Save to Server**. Doing so launches a modal asking you to enter details related to your form.

![Save modal](/img/save-modal.png)

Press **OK** to save your form, and then **Exit** to leave the schema editor.

You should now be able to see your new form in the forms list.
