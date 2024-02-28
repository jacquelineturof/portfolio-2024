export default function StackButton() {
  return (
    <>
      <button
        className="btn rounded-full h-24 w-24 mt-auto flex flex-col text-white"
        onClick={() => document.getElementById('my_modal_1').showModal()}
      >
        <span className="font-bold">Stack</span>
        <span className="text-xs font-light">&</span>
        <span className="font-bold">CV</span>
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">My current stack</h3>
          <p className="py-4">
            My current tech stack is serverless. Utilizing NextJS with Typescript (and Redux), Supabase and Vercel.
            I am currently studying for my AWS certification.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
            <button className="btn btn-secondary">Download CV</button>
          </div>
        </div>
      </dialog>
    </>
  )
}