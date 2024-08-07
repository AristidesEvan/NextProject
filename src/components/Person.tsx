const getWeekDay = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: "long"}).format(today);
}

type Props = {
    name?: string,
    avatar?: string,
    roles: string[]
}

export const Person = ({
    name = "Jão!",
    avatar = "https://media.istockphoto.com/id/1337144146/pt/vetorial/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=_XeYoSJQIN7GrE08cUQDJCo3U7yvoEp5OKpbhQzpmC0=",
    roles
}: Props) => {

    const today: Date = new Date();

    return (
        <div className="p-3">
            <h1>{name} - {getWeekDay(today)}</h1>
            <img 
                src={avatar}
                alt={name}
                className="w-40 h-40"
            />
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </div>
    );
}

