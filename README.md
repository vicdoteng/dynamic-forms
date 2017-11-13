**Prototype for dynamic forms**

1) Clone repo!
2) `npm install`
3) `npm run start`

**Component structure**  

`FormContainer` is the controller that mediates between back-end
services and the dynamically loaded React components. 
Orchestration, basically.

It delegates to services:
- `form-api` is a mock (in this case synchronous) service for
making webservice calls. Config is currently stringified and
parsed just to make sure the structure would translate if it came
over the wire.
- `form-service` is the client-side logic needed to project data
from endpoints to data that `FormContainer` requires. In this
case, it maps from the strings that denote the field type to the
React component that renders that field type. This one service is
a stand-in for a collection of services to do any client-side
work.

`Components` each represent an actual dynamically-defined form
field. They don't have to map one-to-one to HTML fields - we
could have a component that renders multiple fields (address,
city, state, zip). Layout for these fields could be customized in
the component (instead of letting `FormContainer` dictate that
all HTML fields be shown one below the other a la Google Forms).

**Data structure**

The form configuration data and the form responses are managed in
`FormContainer` state:
- `state.form` is an array of dynamic field definitions
- `state.responses` is a dictionary where key: field id and
value: user response.

*`state.form`*  
An array. Each element represents a dynamic field to load and has the following structure:  

- `id`: some unique identifier for the dynamic field
- `fieldType`: an identifier for the type of dynamic field
- `label`: the field label
- `config`: an object of config values unique to the fieldType

I included some other fields we might find useful that aren't used in this prototype, to remind myself to think about them.

*`state.responses`*  
An object defined dynamically by the `state.form` elements. Each
element is projected into a key-value where the key is the `id`
of the field and the value is the user response. The result is 
if we have a `state.form` like:
```
[
  { id: 'username', label: 'User Name' ...},
  { id: 'company', label: 'Company or Organization' ...},
  { id: 'title', label: 'Job Title or Position' ...}
]
```

We end up with `state.responses` like: 
```
{
  username: 'Amy Adams',
  company: 'StartUp Media, Inc.',
  title: 'Social Media Manager'
}
```