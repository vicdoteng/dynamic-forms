import { TextArea } from '../components/text-area';
import { TextInput } from '../components/text-input';

export function mapFieldTypeToComponent(fieldType) {
    switch (fieldType) {
        case 'text':
            return TextInput;
        case 'textarea':
            return TextArea;
        default:
            return '';
    }
}