export default function CoupleSection() {
  return (
    <section className="pt-4 md:pt-18 px-4 pb-4 md:pb-14 md:px-24 flex flex-col md:flex-row justify-center items-center gap-7 md:gap-12">
      <div className="flex-1 text-center">
        <img
          src="/AE5.jpeg"
          alt="Bride"
          className="w-64 h-64 object-cover object-[center_44%] rounded-full mx-auto"
        />
        <h3 className="mt-4 text-blue-600 text-2xl font-serif">Aihanuwa</h3>
        <p className="mt-2">
          Aihanuwa Igharo, from Usen, is a dedicated nurse known for her warmth,
          and compassionate heart. Deeply rooted in family values and faith, she
          carries herself with love and humility, and her caring nature makes
          her a blessing to all who know her.
        </p>
      </div>
      <div className="flex-1 text-center">
        <img
          src="/AE3.jpeg"
          alt="Groom"
          className="w-64 h-64 object-cover object-[center_10%] rounded-full mx-auto"
        />
        <h3 className="mt-4 text-blue-600 text-2xl font-serif">Emmanuel</h3>
        <p className="mt-2">
          Emmanuel Omogiate from Orhiomwon is a general contractor who values
          faith, family, and purpose. He believes that love is best shown
          through consistency, care, and commitment. His calm nature and steady
          heart make him a true partner and a trusted friend.
        </p>
      </div>
    </section>
  );
}
