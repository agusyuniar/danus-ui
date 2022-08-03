import React, { Component } from 'react';
import { Container } from '@mui/system';
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import Navbar from '../components/navbar';


class RegisterStaff extends Component {
    state = {}
    render() {
        return (
            <div>
                <Navbar />
                <div className='text-center'>
                    Daftarkan Staff
                    <div className='container col-5 border rounded p-2'>

                        <div className=''>
                            <TextField
                                label='Nama Lengkap'
                                variant='standard'
                                size='small'
                                id='filled-size-small'
                            />
                        </div>
                        <div>
                            <TextField
                                label='Jabatan'
                                variant='standard'
                                size='small'
                                id='filled-size-small'
                            />
                        </div>
                        <div>
                            <TextField
                                label='Alamat'
                                variant='standard'
                                size='small'
                                id='filled-size-small'
                            />
                        </div>
                        <div>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                    </div>
                    <div>
                        <div className='container col-5 border rounded p-2 my-2'>
                            <div className=''>
                                <table className='m-auto text-right'>
                                    <tr className=''>
                                        <td>username : &nbsp;</td>
                                        <td> <TextField
                                            label='username'
                                            // variant='standard'
                                            size='small'
                                        // id='filled-size-small'
                                        /></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            password : &nbsp;
                                        </td>
                                        <td>
                                            <TextField
                                                label='password'
                                                // variant='standard'
                                                size='small'
                                                id='filled-size-small'
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>ulangi password : &nbsp;</td>
                                        <td>
                                            <TextField
                                                label='ulangi password'
                                                // variant='standard'
                                                size='small'
                                                id='filled-size-small'
                                            />
                                        </td>
                                    </tr>
                                    
                                </table>


                            </div>
                        </div>
                                    
                                        <Button
                                            className='text-center'
                                            variant='contained'   
                                             
                                            >
                                            Register
                                        </Button>
                    </div>

                </div>
                <div className='text-center'>
                    sudah ada akun? <a href='/'>login</a>
                </div>
            </div>
        );
    }
}

export default RegisterStaff;