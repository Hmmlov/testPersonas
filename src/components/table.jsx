import React, {useEffect, useRef  } from 'react'

const Table = ({ rows, columns, basicTable, heigth}) => {

    const tableRef = useRef(null);

    useEffect(() => {
        if (tableRef.current) {
            tableRef.current.clear();
            tableRef.current.rows.add(rows);
            tableRef.current.draw();
        } else {
            tableRef.current = $('#' + basicTable).DataTable({
                keys: !0,
                responsive: true,
                language: {
                    paginate: {
                        previous: "<i class='mdi mdi-chevron-left'>",
                        next: "<i class='mdi mdi-chevron-right'>"
                    }
                },
                drawCallback: function () {
                    $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
                },
                data: rows,
                columns: columns,
                scrollY: heigth,
            });
        }
    },[rows, columns])

    return (
        <div>
            <table id={basicTable} className="table dt-responsive nowrap w-100"></table>
        </div>
    )
}

export default Table
