import { createSlice } from '@reduxjs/toolkit' 

const serviceSlice = createSlice({
    name:'service',
    initialState:{ 
        appointments:[]
    },
    reducers:{ 
        makeAnAppointment:(state, action)=>{  
            state.appointments.push(action.payload)
        },
        removeFromAppointment:(state, {payload})=>{
            // console.log(state, payload)
           const restAppointments = state.appointments.filter(appointment=> appointment.name !== payload.name)
           state.appointments = restAppointments
        }
    }
   
})
export const { makeAnAppointment,removeFromAppointment  } = serviceSlice.actions
export default serviceSlice.reducer