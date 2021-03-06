import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useLoadData from '../../Shared/Hooks/useLoadData';


    


const ManageItems = () => {
    const url='https://guarded-ravine-66276.herokuapp.com/manageInv'
    const data= useLoadData(url)
   
    const [rows, setData]=useState([])

    useEffect(()=>setData(data),[data])

    
    return (
             <div className='container mx-auto' >
             <p className=' text-left my-5'> We have <span className=" text-[#F46617]  text-2xl px-2">{rows.length}</span> Vehicles availble.</p>
              
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
                        <TableHead className='bg-[#F46617]  '>
                            <TableRow className="">
                                <TableCell>No.</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell align="left">Email</TableCell>
                                <TableCell align="left">Supplier</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Stock</TableCell>
                                <TableCell align="right">sold</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row, i) => (
                            <TableRow key={row._id}  >
                                <TableCell align="left">{i+1}</TableCell>
                                <TableCell as={Link} to={`/inventory/${row._id}`} align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.supplier}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.stock}</TableCell>
                                <TableCell align="right">{row.sold}</TableCell>
                               
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
             </div>
         )
}

export default ManageItems;