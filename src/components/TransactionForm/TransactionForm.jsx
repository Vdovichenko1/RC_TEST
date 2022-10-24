import { Container } from "../Container/Container";
import s from "./TransactionForm.module.css";

export const TransactionForm = () => {
    return (<section className={s.section}>
      <Container>
        <form className={s.form}>
          <label className={s.label}>
            <span className={s['label-title']}>Дата</span>
            <input type="date" name="date" />
          </label>
          <label className={s.label}>
            <span className={s['label-title']}>Час</span>
            <input type="time" name="time" />
          </label>
          <label className={s.label}>
            <span className={s['label-title']}>Сума</span>
            <input type="text" name="summ" placeholder="Вкажіть суму" />
          </label>
          <label className={s.label}>
            <span className={s['label-title']}>Валюта</span>
            <input type="button" name="currency" value="UAH" />
          </label>
          <label className={s.label}>
            <span className={s['label-title']}>Коментар</span>
            <input type="text" name="text" placeholder="Коментар..." />
          </label>
          <button type="submit" className={s["btn-form"]}>Додати</button>
        </form>
      </Container>
    </section>)
}