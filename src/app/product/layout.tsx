export default function DefaultLayout({children, modal}: {children: React.ReactNode, modal: React.ReactNode}) {
    return(
        <>
            {children}
            {modal}
        </>
    )
}