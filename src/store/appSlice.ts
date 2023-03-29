import { createSlice } from '@reduxjs/toolkit';
import { PremierLeagueDataType } from '../components/utils';

interface AppState {
    selectpremierLeagueData: PremierLeagueDataType[];
}

const initialState: AppState = {
    selectpremierLeagueData: [
        {
            AST: "4",
            FTHG: "2",
            AwayTeam: "Arsenal",
            FTR: "H",
            AC: "5",
            HTAG: "0",
            HTR: "H",
            AF: "8",
            HST: "3",
            HR: "0",
            HS: "8",
            HY: "0",
            AR: "0",
            AS: "22",
            Referee: "M Oliver",
            AY: "0",
            FTAG: "0",
            HTHG: "1",
            HC: "2",
            HomeTeam: "Brentford",
            HF: "12"
        }
    ]
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {

        setselectpremierLeagueData(state: any, action) {
            state.selectpremierLeagueData = action.payload;
        },
    },
});

export const { setselectpremierLeagueData } = appSlice.actions;

export default appSlice.reducer;
