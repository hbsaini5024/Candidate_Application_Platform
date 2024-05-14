import React, { useEffect } from 'react'
import './Navbar.css'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField'
import { IoMdLogOut } from "react-icons/io";
import { KEY_ACCESS_TOKEN, removeItem } from '../../utils/localStorageManager';
import { toast } from 'react-toastify';


const Navbar = () => {

    const handleLogout = (e) => {
        e.preventDefault();

        removeItem(KEY_ACCESS_TOKEN);
        toast.success('User Succesfully Logout')

        window.location.reload();

    }

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <FormControl sx={{ m: 0, width: 150 }}>
                            <InputLabel id="demo-multiple-name-label">Roles</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                // multiple
                                // value={roles && []}
                                // onChange={(e)=>setSelectJobRole(e.target.value)}
                                // input={<OutlinedInput label="Name" />}
                            >
                                {/* {roles?.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                    // style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))} */}
                            </Select>
                        </FormControl>
                    </li>
                    <li>
                        <FormControl sx={{ m: 0, width: 180 }}>
                            <InputLabel id="demo-multiple-name-label">Number of Employees</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                // value={personName}
                                // onChange={handleChange}
                                input={<OutlinedInput label="Name" />}
                            // MenuProps={MenuProps}
                            >
                                {/* {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))} */}
                            </Select>
                        </FormControl>
                    </li>
                    <li>
                        <FormControl sx={{ m: 0, width: 150 }}>
                            <InputLabel id="demo-multiple-name-label">Experience</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                // value={personName}
                                // onChange={handleChange}
                                input={<OutlinedInput label="Name" />}
                            // MenuProps={MenuProps}
                            >
                                {/* {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))} */}
                            </Select>
                        </FormControl>
                    </li>
                    <li>
                        <FormControl sx={{ m: 0, width: 150 }}>
                            <InputLabel id="demo-multiple-name-label">Remote</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                // value={personName}
                                // onChange={handleChange}
                                input={<OutlinedInput label="Name" />}
                            // MenuProps={MenuProps}
                            >
                                {/* {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))} */}
                            </Select>
                        </FormControl>
                    </li>
                    <li>
                        <FormControl sx={{ m: 0, width: 180 }}>
                            <InputLabel id="demo-multiple-name-label">Minimum Base salary</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                // value={personName}
                                // onChange={handleChange}
                                input={<OutlinedInput label="Name" />}
                            // MenuProps={MenuProps}
                            >
                                {/* {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))} */}
                            </Select>
                        </FormControl>
                    </li>
                    <li>
                        <TextField id="outlined-search" label="Search field" type="search" />
                    </li>
                </ul>

                <button style={
                    {
                        position: 'absolute',
                        top: '60px',
                        left: '1310px',
                        fontSize: '1rem'
                    }
                }
                    onClick={handleLogout}
                >{<IoMdLogOut />}</button>
            </nav>
        </>
    )
}

export default Navbar;