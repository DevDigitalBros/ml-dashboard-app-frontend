import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { PremierLeagueDataType } from '../utils';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Button } from 'primereact/button';


const PaginatorPremierLeagueData = () => {

    const [data, setData] = useState<PremierLeagueDataType[]>();

    const selectpremierLeagueData = useSelector(
        (state: RootState) => state.app.selectpremierLeagueData
    );
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {

        setData(selectpremierLeagueData);

    }, [selectpremierLeagueData])


    return (
        <div className="card">
            <DataTable showGridlines value={selectpremierLeagueData} paginator rowsPerPageOptions={[5, 10, 25, 50]} rows={11} tableStyle={{ minWidth: '50rem' }} paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} >
                <Column field="HomeTeam" header="Home Team" style={{ width: '14%' }}></Column>
                <Column field="AwayTeam" header="Away Team" style={{ width: '13%' }}></Column>
                <Column field="Referee" header="Referee" style={{ width: '15%' }}></Column>
                <Column field="FTAG" sortable header="Full Time Away Goal" style={{ width: '15%' }}></Column>
                <Column field="FTHG" sortable header="Full Time Home Goal" style={{ width: '15%' }}></Column>
                <Column field="HST" header="Home Team Shots on Target" style={{ width: '15%' }}></Column>
                <Column field="AST" header="Away Team Shots on Target" style={{ width: '15%' }}></Column>


            </DataTable>
        </div>
    )
}


export default PaginatorPremierLeagueData