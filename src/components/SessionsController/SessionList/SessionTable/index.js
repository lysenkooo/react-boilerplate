import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const styles = (theme) => ({
  table: {
    minWidth: 700,
  }
})

const SessionTable = (props) => {
  const { classes } = props

  return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell numeric>ID</TableCell>
            <TableCell>IP</TableCell>
            <TableCell>Browser</TableCell>
            <TableCell>Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.sessions.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell numeric component="th" scope="row">
                  <Link to={`/sessions/${row.id}`}>
                    {row.id}
                  </Link>
                </TableCell>
                <TableCell>{row.ip}</TableCell>
                <TableCell>{row.browser}</TableCell>
                <TableCell>{row.created_at}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
  )
}

SessionTable.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SessionTable)
