import { Delete } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemText, IconButton, Tooltip, Avatar, ListItemAvatar, Grid, ListItemIcon } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Service, Status } from "../models/types";
import { Header } from "../pages/services/details";
import { StatusIcon } from "./status";

import EditIcon from '@mui/icons-material/Edit';
import { useDeleteServiceMutation, useGetAllServiceQuery } from "../feature/api/serviceSlice";
import { DeleteServiceDialog } from "./dialogs/DeleteDialog";


export enum Modes {
    NORMAL, DELETE, EDIT
}

export function ServiceItem(props: { service: Service, showActions?: boolean, showPath?: boolean }) {


    const [mode, setMode] = useState<Modes>(Modes.NORMAL)

    const resetMode = () => {
        setMode(Modes.NORMAL)
    }

    const deleteService = useDeleteServiceMutation()[0]
    const serviceGetter = useGetAllServiceQuery(undefined)

    const remove = () => {
        deleteService(props.service).then(
            serviceGetter.refetch
        )
        setMode(Modes.NORMAL)
    }

    const Actions = () => (
        <>
            <Grid container>
                {/* <Grid item xs={6}>
                    <Tooltip title={"Delete"}>
                        <IconButton edge="end" aria-label="Delete" onClick={(e) => { e.preventDefault(); setMode(Modes.DELETE) }}>
                            <Delete />
                        </IconButton>
                    </Tooltip>
                </Grid> */}
                <Grid item xs={6}>
                    <Tooltip title={"Edit"}>
                        <Link to={"/services/" + props.service.uuid} state={{ mode: Modes.EDIT }} >
                            <IconButton edge="end" aria-label="Edit" onClick={(e) => { setMode(Modes.EDIT) }}>
                                <EditIcon />
                            </IconButton>
                        </Link>
                    </Tooltip>
                </Grid>
            </Grid>
        </>
    )

    return (
        <>

            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={"/services/" + props.service.uuid}>

                <ListItem
                    key={"item_" + props.service.uuid}
                    disablePadding
                    secondaryAction={<Actions />}
                >
                    <ListItemButton dense >
                        <ListItemIcon>
                            <StatusIcon status={props.service.status} />
                        </ListItemIcon>
                        <ListItemText
                            primary={<Header {...props} />}
                            secondary={props.service.description?.slice(0, 100).trim() + (props.service.description?.length! > 100 ? "..." : ".")}
                        />
                    </ListItemButton>
                </ListItem>
            </Link>

            <DeleteServiceDialog
                open={mode === Modes.DELETE}
                item={props.service}
                onSuccess={remove}
                onClose={resetMode}
            />

        </>

    )
}
