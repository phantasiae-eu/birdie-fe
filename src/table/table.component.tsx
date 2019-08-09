import React, { ReactElement } from 'react'
import { TableStateProps } from './table.model'
import { Table as TableBoot } from 'react-bootstrap'
import { DbItems, DbItem, Row } from '../selector/selector.model'

const Table: React.FC<TableStateProps> = (
    props: TableStateProps
): ReactElement => (
    <div>
        <p>Total entries non displayed:</p>
        <p>{props.table.totNonDisplayed}</p>
        <p>Total rows non displayed:</p>
        <p>{props.table.nonDisplayedCategoriesnumb}</p>
        <TableBoot striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>
                        {props.selector
                            ? DbItems.filter(
                                  (item: DbItem): boolean =>
                                      item.value === props.selector
                              )[0].key
                            : '-'}
                    </th>
                    <th>count</th>
                    <th>Average age</th>
                </tr>
            </thead>
            <tbody>
                {props.table.rows.map(
                    (row: Row, index: number): ReactElement => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{row.category}</td>
                            <td>{row.count}</td>
                            <td>{row.averageAge}</td>
                        </tr>
                    )
                )}
            </tbody>
        </TableBoot>
    </div>
)

export default Table
