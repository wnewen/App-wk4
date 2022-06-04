
const initialState = { poopairyValue: ' ' };

const poopairySlice = createSlice({
    name: 'poopairy',
    initialState,

    reducers: {
        setPoopairy: (state, action) => {
            state.poopairyValue = action.payload;
        },
    },
});

const selectPoopairy = (state) => state.poopairy.poopairyValue;
const { setPoopairy } = poopairySlice.actions; 