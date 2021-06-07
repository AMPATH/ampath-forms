---
sidebar_position: 1
---

# Getting Started

## The Form Builder

When working with AMPATH Forms, the primary tool we'll be using is the Form Builder. The Form Builder provides an easy to use UI with which we can create forms of arbitrary complexity.

When you first visit the Form Builder [website](https://openmrs-spa.org/formbuilder/#/login), you'll see a login screen.

![Login page](/img/login.png)

Type `/openmrs` in the **OpenMRS Server URL** field and then enter your login credentials to log in.

:::info CORS
As the Form Builder frontend runs on a different server than the backend, we rely on [CORS](https://geekflare.com/cors-basics/) to handle communication between these two origins. You might need to install an extension in your browser that enables CORS to use the Form Builder properly.
:::

Once logged in, you should see this landing page.

![Landing page](/img/forms-list.png)

Features on this page include:

- The **Create New** button. Clicking on this launches the schema editor.
- The **Forms List view** dropdown. You can use it to toggle between displaying Forms and Components.
- The **Forms List search bar**. You can use it to search through the available Forms by name. You can also use the Published filter to limit your search to only forms that are published.
- The **Forms List** - A list of all the Forms saved to the backend server. From it, you can see the Form names and versions, their published status, their retired status, and a list of actions you can take. These actions include the ability to:
  - Edit a Form schema. Clicking the pen icon loads the selected form's schema in the [Schema Editor](#using-the-schema-editor).
  - Download a Form schema.
  - Import a Form schema.
- **Pagination controls** - These are at the bottom of the Forms List. They allow you to navigate between the items in the Forms list.

## The Schema Editor

The Schema Editor is the area where you'll do most of your work.

![Schema editor](/img/schema-editor.png)

You can access the Schema Editor in two ways:

- Clicking **Create New** to create a new Form or a Component.
- Clicking the pen icon next to a Form in the forms list to edit an existing schema.

Features of the Schema Editor include:

- The **Interactive Schema Builder**. Accessible by clicking the hamburger menu at the far left of the navigation bar.
- The **File** menu. From it, you can either:

  - Save a Form locally by persisting the schema to your browser's LocalStorage.
  - Save a Form to the server.

- The **View** menu. Allows you to toggle between **Single View** and **Split View** modes.
- The **Tasks** menu. Allows you to:

  - Add Concept Mappings to your schema.
  - Validate Concepts.

- The **User** menu. This menu shows information about the logged-in user.
- The **Audit** menu. This menu shows audit information for a form schema. This information includes Form metadata such as the Form name, UUID, version, description, and the associated Encounter Type. It also shows who created or modified a Form and when.
- The **Referenced Forms** button. Clicking this button shows a list of components referenced by the active form. It also allows you to reference Components from a handy dropdown menu.

:::info Components
Components are reusable forms that encapsulate related logic. They can be mixed and matched to create complex forms. Read more about this components in the [Referencing Forms](/platform/referencing-forms) guide.
:::

- The **Publish** button. Allows you to publish your form schema.
- The **Schema Editor tab** renders a JSON-based representation of your Form schema in an embedded code editor.
- The **Form Viewer** tab renders the visual representation of your Form schema once it gets compiled by the form engine.
- The **Render** button. Clicking this button enables the Form engine to compile your Form schema. This step ensures that your Form schema is valid and free of errors.
- The **build timestamp** at the bottom right of the page shows details relating to the current build version.
