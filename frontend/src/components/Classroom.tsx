//import { Button, IconButton, ListItem, ListItemText } from "@mui/material";
// import type { Classroom } from "../types/notes";
import type { ClassroomData } from "../types/classrooms";
// import LabelImportantOutlineIcon from "@mui/icons-material/LabelImportantOutline";
// import LabelImportantIcon from "@mui/icons-material/LabelImportant";

interface Prop {
  classroom: ClassroomData;
}
const Classroom = ({ classroom }: Prop) => (
    <div>
        <h2>{classroom.name}</h2>
        <p>Building: {classroom.building}</p>
        <p>Zone: {classroom.zone}</p>
        <p>Capacity: {classroom.capacity}</p>
        <p>Likes: {classroom.likes}</p>
        <p>Dislikes: {classroom.dislikes}</p>
    </div>
//   <ListItem
//     disablePadding
//     // secondaryAction={
//     // //   <IconButton edge="end" aria-label="delete" onClick={toggleImportance}>
//     // //     {note.important ? (
//     // //     //   <LabelImportantIcon color="error" />
//     // //     ) : (
//     // //     //   <LabelImportantOutlineIcon />
//     // //     )}
//     // //   </IconButton>
//     // }
//   >
//     <ListItemText primary={classroom.name} />
//     <ListItemText primary={`Building: ${classroom.building}`} />
//     <ListItemText primary={`Zone: ${classroom.zone}`} />
//     <ListItemText primary={`Capacity: ${classroom.capacity}`} />
//   </ListItem>
);

export default Classroom;