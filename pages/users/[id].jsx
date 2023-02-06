import {useRouter} from 'next/router'
import MainContainer from '../../components/MainConatainer'
import styles from '../../style/User.module.scss'

export default function User({user}) {
    const {query} = useRouter()
    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>User with id {query.id}</h1>
                <dir>Name - {user.name}</dir>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user},
    }
}