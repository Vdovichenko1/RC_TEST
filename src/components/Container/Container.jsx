import css from "./Container.module.css";

export const Container = (props) => {
    // console.log(props);
    return (
        <div className={css.container}>
            {props.children}
        </div>
    )
}