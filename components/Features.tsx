import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center">
        Why MindSpace?
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <FeatureCard
          title="Save Anything"
          description="Notes, links, screenshots, ideas and everything in between."
        />

        <FeatureCard
          title="Find Instantly"
          description="No more digging through tabs, folders and chat histories."
        />

        <FeatureCard
          title="Stay Organized"
          description="Drop things in. Let MindSpace handle the rest."
        />
      </div>
    </section>
  );
}