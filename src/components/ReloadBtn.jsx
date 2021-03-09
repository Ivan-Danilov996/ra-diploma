export default function ReloadBtn({setReload}) {
    return (
        <button onClick={() => setReload(prev => !prev)}>Попробовать снова!</button>
    )
}