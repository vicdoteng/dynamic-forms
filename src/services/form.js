const panel1Fields = [
    {
        fieldType: 'text',
        dataType: 'string',
        label: 'Name',
        required: true,

        maxLength: 50,
        default: 'Enter your name'
    },
    {
        fieldType: 'textarea',
        dataType: 'string',
        label: 'Description',
        required: false,

        rows: 12,
        cols: 60
    }
]

const panel2Fields = [
    {
        fieldType: 'pick-one',
        dataType: 'number',
        label: 'Rating',
        required: true,

        options: {
            1: 'One',
            2: 'Two',
            3: 'Three',
            4: 'Four',
            5: 'Five'
        }
    },
    {
        fieldType: 'pick-many',
        dataType: 'array string',
        label: 'Extras',
        required: false,

        options: {
            batteries: 'Extra Batteries',
            cables: 'Cables',
            manual: 'Manual'
        }
    },

]

const formConfig = {
    panels: [
        {
            id: 1,
            order: 1,
            fields: panel1Fields
        },
        {
            id: 2,
            order: 2,
            fields: panel2Fields
        }
    ]
}

function getFormJson() {
    return JSON.stringify(formConfig);
}

export function getForm() {
    return JSON.parse(getFormJson());
}
