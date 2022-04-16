import { CircularProgress, TableCell, TableRow } from '@material-ui/core'

export const Loader = ({ size }: { size?: string }) => {
    if (size === 'sm') {
        return <CircularProgress size={'2rem'} />
    } else {
        return (
            <TableRow>
                <TableCell>
                    <CircularProgress />
                </TableCell>
            </TableRow>
        )
    }
}
