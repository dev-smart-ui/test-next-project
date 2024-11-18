type THeading = {
  title: string,
  description?: string
}
export const Heading = ({title, description}: THeading) => {
  return(
    <header className={`lg:py-4 mb-6 flex flex-col gap-3`}>
      <h1 className={`font-semibold text-3xl lg:text-5xl`}>{title}</h1>
      <p>{description}</p>
    </header>
  )
}
