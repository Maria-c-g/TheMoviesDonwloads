export interface IMenu {
    id: number,
    label: string,
    route: { path: string, element: JSX.Element }
}

export const mainMenuItems = [
    {
        id: 0,
        label: "Inicio",
        route: {
            path: "/",
            element: ""
        }

    },
    {
        id: 1,
        label: "Costumes",
        route: {
            path: "Lista",
            element: ""
        }

    },
    {
        id: 2,
        label: "Props",
        route: {
            path: "Props",
            element: ""
        }

    },
    {
        id: 3,
        label: "Sets",
        route: {
            path: "Sets",
            element: ""
        }

    },
    {
        id: 4,
        label: "Escenas",
        route: {
            path: "Escenas",
            element: ""
        }

    },
    {
        id: 5,
        label: "Herramientas",
        route: {
            path: "Herramientas",
            element: ""
        }

    }
]