import { useTrainersStore } from "../../hooks/useTrainersStore"

export const TrainerItem = ({ name, img, price, description, _id }) => {

    const { updateTrainer } = useTrainersStore()

    return (
        <div className="col">
            <div className="container border border-danger bg-secondary text-white p-4" style={{width: '18rem'}}>
                <img src={ img } className="card-img-top rounded-circle" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fs-1 text-center">{ name }</h5>
                        <p className="card-text fs-5">{ description }</p>
                        <p className="card-text fs-3">$ { price }</p>
                        <button class="btn btn-primary btn-danger" onClick={() => updateTrainer(_id, img, name)}>Contratame!</button>
                    </div>
            </div>
        </div>
    )
}
