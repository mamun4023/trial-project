import React, { useMemo, useState, useEffect } from 'react'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import  {useTable, useSortBy,usePagination, useGlobalFilter} from 'react-table';
import "./index.css";
import DATA from './data.json';
import GlobalFilter from './filter';

const COLUMNS = [
	{
		Header: "Day",
		accessor : "day",
	},
	{
		Header : "Max temperature",
		accessor : "max",
	},
	{
		Header : "Min temperature",
		accessor : "min"
	},
	{
		Header : "Weather",
		accessor : "status"
	}
]

function Table(){
    
	const columns = useMemo(()=> COLUMNS, []);
	const data = useMemo(()=> DATA, []);
	const tableInstance = useTable({
		columns,
		data,
		initialState : {pageIndex : 0}
	},useGlobalFilter,useSortBy,usePagination );
    
	const  {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		prepareRow,
		state,
		setGlobalFilter,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		gotoPage,
		pageCount,
		setPageSize
	} = tableInstance;

	const {globalFilter, pageIndex, pageSize} = state;

	return(
		<>
		 <div className = "table-container"> 
		   <div>
		   	<h4 className = "my-3 p-2 rounded text-white bg-dark text-left" > Weather Forcast </h4>
			<GlobalFilter filter = {globalFilter} setFilter = {setGlobalFilter} />
		    <table className = "table table-striped table-bordered table-hover " {...getTableProps()}>
			<thead className = "table-header" >
					{
						headerGroups.map(headerGroup =>(
							<tr {...headerGroup.getHeaderGroupProps()}>

								{
									headerGroup.headers.map(column=> (
										<th {...column.getHeaderProps(column.getSortByToggleProps())}>
											{column.render('Header')} 
										    <i class="fas fa-sort sort-icon"></i>
										</th>
									))
								}
							</tr>
						))
					  }
				</thead>
				<tbody {...getTableBodyProps()}>
					{
						page.map(row=> {
							prepareRow(row)
							return(
								<tr{...row.getRowProps()}>
									{row.cells.map(cell => {
										return(
											<td {...cell.getCellProps()}>
												{cell.render('Cell')}
											</td>
										)
									})}
								</tr>	
							)
						})
					}
				</tbody>
			</table>
			<hr/>
			<div className = "pagination-bar">
				  <span>
					  {' '}
					  <strong>
						  {pageIndex + 1} - {pageOptions.length} {"   "}
					  </strong>
				  </span>
				  
				  <select className = "pagination-box" value = {pageSize} onChange = {e=> setPageSize(Number(e.target.value))}>
					  {
						  [10,25,50].map(pageSize => (
							  <option key ={pageSize} value = {pageSize}>
								  Show {pageSize}
							  </option>
						  ))
					  }
				  </select>
				  <button className ="btn btn-sm text-info p-2 m-1 "  onClick = {()=> gotoPage(0)} disabled = {!canPreviousPage}  > <i class="fas fa-fast-backward"></i> </button>
				  <button className ="btn btn-sm text-info p-2 m-1"   onClick = {()=> previousPage()} disabled = {!canPreviousPage}  ><i class="fas fa-angle-double-left"></i></button>
				  <button className ="btn btn-sm text-info p-2 m-1"   onClick = {()=> nextPage()} disabled = {!canNextPage} ><i class="fas fa-angle-double-right"></i></button>
				  <button className ="btn btn-sm text-info p-2 m-1"   onClick = {()=> gotoPage(pageCount - 1) } disabled = {!canNextPage} > <i class="fas fa-fast-forward"></i> </button>
			  </div>
			</div>
	 	</div>

		</>
	)
}

export default Table;