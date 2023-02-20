import { ListItem, ListItemButton, ListItemText, IconButton, Tooltip, ListItemAvatar } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Service } from "../models/types";
import { Header } from "../pages/services/details";
import { StatusAvatar } from "./status";
import EditIcon from '@mui/icons-material/Edit';
import { Can } from "@casl/react";
import { Operation, Asset } from "../feature/authentication/config/ability";
import { UserContext } from "../feature/authentication/logic/FetchUser";
import { useKeycloak } from "@react-keycloak/web";
import { t } from "i18next";


export enum Modes {
    NORMAL, DELETE, EDIT
}

export function ServiceItem(props: { service: Service, showActions?: boolean, showPath?: boolean }) {

    const user = useContext(UserContext)!
    const keycloak = useKeycloak()

    const Actions = () => (
        <>
            <Can ability={user?.getAbility()} I={Operation.READ} a={Asset.RESOURCE}>
                <Tooltip title={<>{t("Edit")}</>}>
                    <Link to={"/services/" + props.service.uuid} state={{ mode: Modes.EDIT }} >
                        <IconButton edge="end">
                            <EditIcon />
                        </IconButton>
                    </Link>
                </Tooltip>
            </Can>

        </>
    )

    const authenticated = keycloak.initialized && keycloak.keycloak.authenticated

    return (
        <>
            <ItemWithLink disabled={!authenticated} to={"/services/" + props.service.uuid}>
                <ListItem
                    key={"item_" + props.service.uuid}    
                    secondaryAction={<Actions />}
                >
                    <ListItemAvatar>
                        <StatusAvatar status={props.service.status} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={<Header {...props} />}
                        secondary={props.service.description?.slice(0, 100).trim() + (props.service.description?.length! > 100 ? "..." : "")}
                    />
                </ListItem>
            </ItemWithLink>
        </>
    )
}

export function ItemWithLink(props: { to: string, disabled?: boolean, children: JSX.Element }) {

    if (props.disabled) return props.children
    return (
        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={props.to}>
            <ListItemButton dense disableGutters disableRipple>

                {props.children}

            </ListItemButton>
        </Link>
    )
}