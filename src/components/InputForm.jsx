import styles from './InputForm.module.css'

export function InputForm() {
    return (
        <form className={styles.inputForm}>
                
            <textarea
                name="newTask" 
                placeholder="Adicione uma nova tarefa"
            />
            
            <button>
                <p>Criar</p>
                <img src="../src/assets/plus-icon.svg" alt="" />
            </button>
            
        </form>
    )
}