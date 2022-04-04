import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

export default function SearchFormView(props) {

    function inputChangedACB(event) {
        props.setSearchText(event.target.value);
    }

    return (
        <Stack direction="row" spacing={2} padding="20px">
            <TextField id="outlined-basic" label="Course" variant="outlined" onChange={inputChangedACB} />
            {/* <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-helper-label">Department</InputLabel>
                <Select
                value={""}
                label="Department"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"EECS"}>EECS</MenuItem>
                </Select>
            </FormControl> */}
        </Stack>
    );

}