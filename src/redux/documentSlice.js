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
// };]

const documentSlice = createSlice({
    name: 'document',
    initialState: [],

    reducers: {
        // setPoopairy: (state, action) => {
        //     state.poopairyValue = action.payload;
        // },

        setDoucument: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (date) => {
                const id = nanoid()
                return { payload: { id, date} }
            }
        },

        // setDocument: (state, date, shape, color, volume) => {
        //     Object.assign({}, state, {
        //         documents: [
        //             ...state.documents,
        //             {
        //                 index: 1,
        //                 date: date,
        //                 shape: shape,
        //                 color: color,
        //                 volume: volume
        //             }
        //         ]
        //     })
        // },
    },
});

export const selectDocument = (state) => state.document.documents;
export const { setDocument } = documentSlice.actions; 
export default documentSlice.reducer;