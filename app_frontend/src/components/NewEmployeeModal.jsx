import NewEmployeeForm from "./NewEmployeeForm"
import { Dialog, DialogTitle, DialogContent, Divider } from '@mui/material';

const NewEmployeeModal = ({modalOpen, onClose, onSubmit}) => (
    <Dialog fullWidth={true} 
            open={modalOpen} 
            onClose={() => onClose()}>
            <DialogTitle>Add a new patient</DialogTitle>
            <Divider />
            <DialogContent>
                <NewEmployeeForm onCancel={onClose} onSubmit={onSubmit}/>
            </DialogContent>
            </Dialog>
)

export default NewEmployeeModal