import { mockComponent } from "react-dom/test-utils"
import { Group } from "./models/group"
import { Service, Status, Announcement } from "./models/types"

const services: Service[] = [
    {
        service_identifier: "identifier0",
        uuid: "0",
        name: "Pexip Video Cluster",
        status: Status.NOT_OK,
        description: "VDX Pexip konferencenode cluster som står for selve afvikling af video",
        ignore_service_name: false
    },
    {
        service_identifier: "identifier1",
        uuid: "1",
        name: "Pexip WebApp",
        status: Status.OK,
        description: "Standard WebRTC video klienten som følger med Pexip installationen",
        ignore_service_name: false
    },
    {
        service_identifier: "identifier2",
        uuid: "2",
        name: "VDX-API ",
        status: Status.OK,
        description: "VDX-API er det api (Application Programming Interface) som udstilles som en service i VDX, hvor de tilsluttede parter kan integrere til egne systemer for booking af møder i VDX",
        ignore_service_name: false
    },
    {
        service_identifier: "identifier3",
        uuid: "3",
        name: "VDX Management",
        status: Status.NOT_OK,
        description: "VDX Management er værktøjet til de tilsluttede parter for administration af egen organisation af af tilgængelige services i VDX",
        ignore_service_name: false
    },
    {
        service_identifier: "identifier4",
        uuid: "4",
        name: "VDX Booking",
        status: Status.OK,
        description: "VDX Booking er værktøjet til de tilsluttede parter for booking af møder i VDX",
        ignore_service_name: false
    }
]

const groups: Group[] = [
    {
        uuid: "0",
        display_order: 1,
        name: "VDX Drift",
        status: Status.NOT_OK,
        description: "A production ready cluster",
        services: [
            services[0].uuid!,
            services[1].uuid!,
            services[2].uuid!,
            services[3].uuid!,
            services[4].uuid!,
        ]
    },
    {
        uuid: "1",
        display_order: 1,
        name: "VDX Stage",
        status: Status.NOT_OK,
        description: "A test environment",
        services: [
            services[0].uuid!,
            services[1].uuid!,
            services[2].uuid!,
            services[3].uuid!,
            services[4].uuid!
        ]
    },
    {
        uuid: "2",
        display_order: 1,
        name: "VDX Stage",
        status: Status.NOT_OK,
        description: "some other group",
        services: [
            services[0].uuid!,
            services[1].uuid!,
            services[2].uuid!,
            services[3].uuid!,
            services[4].uuid!
        ]
    }
]


const announcements: Announcement[] = [
    { uuid: "0", from_datetime: new Date(), to_datetime: new Date(), subject: "subject", message: "message" },
    { uuid: "1", from_datetime: new Date(), to_datetime: new Date(), subject: "subject", message: "message" },
    { uuid: "2", from_datetime: new Date(), to_datetime: new Date(), subject: "subject", message: "message" },
    { uuid: "3", from_datetime: new Date(), to_datetime: new Date(), subject: "subject", message: "message" },
    { uuid: "4", from_datetime: new Date(), to_datetime: new Date(), subject: "subject", message: "message" },
    { uuid: "5", from_datetime: new Date(), to_datetime: new Date(), subject: "subject", message: "message" },
    { uuid: "6", from_datetime: new Date(), to_datetime: new Date(), subject: "subject", message: "message" },
]



const days = [100, 100, 99, 10, 70, 88, 97, 100, 100, 99, 100, 70, 88, 20, 99, 100, 70, 88, 97, 100, 1, 99, 100, 70, 88, 100, 99, 100, 70, 88, 97, 100, 100, 99, 70, 88, 100, 99, 100, 70, 88, 97, 100, 100, 99, 100, 70, 88, 100, 99, 100, 70, 88, 97, 100, 100, 99, 100, 70, 88, 100, 99, 100, 70, 88, 97, 100, 100, 99, 100, 70, 88, 100, 99, 100, 70, 88, 97, 100, 100, 99, 100, 70, 88, 100, 99, 100, 70, 88, 97]


export const mock = {
    announcements,
    groups,
    services,
    days
}

