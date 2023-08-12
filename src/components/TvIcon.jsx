import { Tooltip } from 'react-tooltip';

export const TvIcon = (props) => {
    return (
        <>
        <Tooltip anchorSelect={`.tv-${props.id}`}>
            <div>{props.tvShows.map((tvShow) => {
                return <div>{tvShow}</div>
            })}</div>
        </Tooltip>
    <svg className={`tv-${props.id}`} xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" style={{cursor:'pointer'}}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.769 17.5H14.231C15.732 17.5279 16.9715 16.334 17 14.833V12.167C16.9715 10.666 15.732 9.47211 14.231 9.49999H10.769C9.268 9.47211 8.02845 10.666 8 12.167V14.834C8.029 16.3346 9.26839 17.5279 10.769 17.5Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.1495 3.62501C9.94244 3.26629 9.48375 3.14337 9.12503 3.35048C8.7663 3.55758 8.64339 4.01627 8.85049 4.37499L10.1495 3.62501ZM10.5825 7.37499C10.7896 7.73371 11.2483 7.85663 11.607 7.64952C11.9657 7.44242 12.0886 6.98373 11.8815 6.62501L10.5825 7.37499ZM16.1495 4.37499C16.3566 4.01627 16.2337 3.55758 15.875 3.35048C15.5163 3.14337 15.0576 3.26629 14.8505 3.62501L16.1495 4.37499ZM13.1185 6.62501C12.9114 6.98373 13.0343 7.44242 13.393 7.64952C13.7517 7.85663 14.2104 7.73371 14.4175 7.37499L13.1185 6.62501ZM13.768 6.25C13.3538 6.25 13.018 6.58579 13.018 7C13.018 7.41421 13.3538 7.75 13.768 7.75V6.25ZM15.192 7L15.1943 6.25H15.192V7ZM19.5 11.333L18.75 11.3309V11.333H19.5ZM19.5 15.666H18.75L18.75 15.6683L19.5 15.666ZM18.2436 18.7252L17.7117 18.1965L18.2436 18.7252ZM15.192 20V20.75L15.1943 20.75L15.192 20ZM9.80802 20L9.80576 20.75H9.80802V20ZM5.50002 15.667L6.25002 15.6691V15.667H5.50002ZM5.50002 11.333H6.25002L6.25001 11.3309L5.50002 11.333ZM9.80802 7V6.25L9.80576 6.25L9.80802 7ZM11.232 7.75C11.6462 7.75 11.982 7.41421 11.982 7C11.982 6.58579 11.6462 6.25 11.232 6.25V7.75ZM13.768 7.75C14.1822 7.75 14.518 7.41421 14.518 7C14.518 6.58579 14.1822 6.25 13.768 6.25V7.75ZM11.232 6.25C10.8178 6.25 10.482 6.58579 10.482 7C10.482 7.41421 10.8178 7.75 11.232 7.75V6.25ZM8.85049 4.37499L10.5825 7.37499L11.8815 6.62501L10.1495 3.62501L8.85049 4.37499ZM14.8505 3.62501L13.1185 6.62501L14.4175 7.37499L16.1495 4.37499L14.8505 3.62501ZM13.768 7.75H15.192V6.25H13.768V7.75ZM15.1898 7.75C17.1617 7.75592 18.7555 9.35902 18.75 11.3309L20.25 11.3351C20.2578 8.5349 17.9945 6.25842 15.1943 6.25L15.1898 7.75ZM18.75 11.333V15.666H20.25V11.333H18.75ZM18.75 15.6683C18.7529 16.6153 18.3794 17.5248 17.7117 18.1965L18.7755 19.254C19.7237 18.3001 20.2541 17.0087 20.25 15.6637L18.75 15.6683ZM17.7117 18.1965C17.044 18.8682 16.1369 19.2472 15.1898 19.25L15.1943 20.75C16.5392 20.746 17.8274 20.2078 18.7755 19.254L17.7117 18.1965ZM15.192 19.25H9.80802V20.75H15.192V19.25ZM9.81027 19.25C7.83838 19.2441 6.24453 17.641 6.25001 15.6691L4.75002 15.6649C4.74223 18.4651 7.00558 20.7416 9.80576 20.75L9.81027 19.25ZM6.25002 15.667V11.333H4.75002V15.667H6.25002ZM6.25001 11.3309C6.24453 9.35902 7.83838 7.75592 9.81027 7.75L9.80576 6.25C7.00558 6.25842 4.74223 8.5349 4.75002 11.3351L6.25001 11.3309ZM9.80802 7.75H11.232V6.25H9.80802V7.75ZM13.768 6.25H11.232V7.75H13.768V6.25Z" fill="#000000"/>
    </svg></>)
}