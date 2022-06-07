import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = [{ 
//     index: 0,
//     documents: [
//         {
//             index: 0,
//             date: 12,
//             shape: 15,
//             color: 15,
//             volume: 5
//         }
//     ]
// }]

const documentSlice = createSlice({
    name: 'document',
    initialState: {poopDocument: [
        {
            date: 5341,
            shape: 5346,
            color: 454,
            volume: 4154
        }
    ]},

    reducers: {
        setDocument: (state, action) => {
            state.poopDocument.push(action.payload);
        }
    },
});

export const selectDocument = (state) => state.document.poopDocument;
export const { setDocument } = documentSlice.actions; 
export default documentSlice.reducer;