
const UsersData = ({user}) => {
    return(
        <>
           {user.map((curEle) => {
              const {name, value} = curEle.id
              const {title, first, last} = curEle.name
              const {email} = curEle

              return(
                <tr key={value}>
                    <td>{value}</td>
                    <td>{`${title} ${first} ${last}`}</td>
                    <td>{email}</td>
                </tr>
              )

           })}
        </>
    )
}

export default UsersData