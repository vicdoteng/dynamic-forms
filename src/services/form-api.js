const formConfig = [
    {
        id: 'name',
        fieldType: 'text',
        dataType: 'string',
        label: 'Name',
        required: true,

        config: {
            maxLength: 50,
            placeholder: 'Enter your name'
        }
    },
    {
        id: 'desc',
        fieldType: 'textarea',
        dataType: 'string',
        label: 'Description',
        required: false,

        config: {
            rows: 12,
            cols: 60
        }
    },
    {
        id: 'rating',
        fieldType: 'pick-one',
        dataType: 'number',
        label: 'Rating',
        required: true,

        config: {
            options: {
                1: 'One',
                2: 'Two',
                3: 'Three',
                4: 'Four',
                5: 'Five'
            }
        }
    },
    {
        id: 'extras',
        fieldType: 'pick-many',
        dataType: 'array string',
        label: 'Extras',
        required: false,

        config: {
            options: {
                batteries: 'Extra Batteries',
                cables: 'Cables',
                manual: 'Manual'
            }
        }
    },
]

function getFormJson() {
    return JSON.stringify(formConfig);
}

export function getForm() {
    return JSON.parse(getFormJson());
}
