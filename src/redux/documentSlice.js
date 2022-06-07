import { createSlice, nanoid } from "@reduxjs/toolkit";
import prePoopDocument from "../json/documents.json"

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
            id: 0,
            date: "4/10 15:45",
            shape: "長滑順",
            color: "褐色",
            volume: "適中"
        }
    ]},

    reducers: {
        setDocument: (state, action) => {
            state.poopDocument.push(action.payload);
        },

        deleteDocument: (state, action) => {
            state.poopDocument = state.poopDocument.filter((document) => document.id !== action.payload.id);
        },
    },
});

export const selectDocument = (state) => state.document.poopDocument;
export const { setDocument, deleteDocument } = documentSlice.actions; 
export default documentSlice.reducer;