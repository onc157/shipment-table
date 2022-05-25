import { CircularProgress, TableCell, TableRow } from '@material-ui/core'

type TColor = 'inherit' | 'primary' | 'secondary'

export const Loader = ({ size, color }: { size?: string; color?: TColor }) => {
    if (size === 'sm') {
        return <CircularProgress size={'2rem'} color={color ?? 'primary'} />
    } else {
        return (
            <TableRow>
                <TableCell>
                    <CircularProgress color={color ?? 'primary'} />
                </TableCell>
            </TableRow>
        )
    }
}
