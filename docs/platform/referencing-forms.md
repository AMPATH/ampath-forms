---
sidebar_position: 3
---

# Referencing Forms

This feature allows you to build complex forms by importing logic from **component** forms in the form builder. Components can be tailored to carry domain-specific information and lend themselves to reuse. They can be mixed and matched to create complex forms. For example, an HIV Testing form can import:

- A lab results component that contains questions and answers related to lab results alone.
- A Tuberculosis treatment component.
- A Pre-Clinic review component, and so on.

Once constructed, the **referencedForms** array looks something like this:

```json
{
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
    }
  ]
}
```
