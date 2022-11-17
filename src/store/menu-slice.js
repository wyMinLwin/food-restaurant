import { createSlice, nanoid } from "@reduxjs/toolkit"
import menu from '../Data'


const menuSlice = createSlice({
    name: 'menu',
    initialState: menu,
    
})

export default menuSlice;