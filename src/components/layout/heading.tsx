type THeading = {
  title: string
}
export const Heading = ({title}: THeading) => {
  return(
    <header className={`pl-10 lg:py-4 mb-6`}>
      <h1 className={`font-semibold text-3xl lg:text-5xl`}>{title}</h1>
    </header>
  )
}
