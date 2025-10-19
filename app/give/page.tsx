"use client";
import { useState } from "react";
import Footer from "../components/Footer";

const donationAmounts = [500, 1000, 2000, 5000, 10000];

const donationCategories = [
  {
    id: "general",
    title: "General Fund",
    description: "Support the general operations and ministries of Grace Worship Center"
  },
  {
    id: "missions",
    title: "Missions",
    description: "Help us reach people around the world with the Gospel"
  },
  {
    id: "building",
    title: "Building Fund",
    description: "Contribute to our church building and facility improvements"
  },
  {
    id: "youth",
    title: "Youth Ministry",
    description: "Support our youth programs and activities"
  },
  {
    id: "outreach",
    title: "Community Outreach",
    description: "Help us serve our local community"
  }
];

export default function Give() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getFinalAmount = () => {
    if (selectedAmount) return selectedAmount;
    if (customAmount) return parseFloat(customAmount) || 0;
    return 0;
  };

  const handleDonate = async () => {
    const amount = getFinalAmount();
    if (amount <= 0) {
      alert("Please select or enter a donation amount");
      return;
    }

    setIsProcessing(true);
    
    try {
      // In a real implementation, you would:
      // 1. Create a payment intent on your backend
      // 2. Redirect to Stripe Checkout or use Stripe Elements
      // 3. Handle the payment confirmation
      
      // For now, we'll simulate the process
      console.log("Processing donation:", {
        amount,
        category: selectedCategory,
        donorName,
        donorEmail
      });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert(`Thank you for your donation of ₹${amount} to ${donationCategories.find(c => c.id === selectedCategory)?.title}!`);
      
      // Reset form
      setSelectedAmount(null);
      setCustomAmount("");
      setDonorName("");
      setDonorEmail("");
      
    } catch (error) {
      console.error("Payment error:", error);
      alert("There was an error processing your donation. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-16">
      <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold sm:text-5xl">Give</h1>
          <p className="mt-4 text-lg text-foreground/70">
            &quot;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.&quot; - 2 Corinthians 9:7
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Donation Form */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-black/5 p-6">
              <h2 className="text-xl font-semibold mb-4">Donation Amount</h2>
              
              {/* Preset Amounts */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`p-3 rounded-lg border transition-colors ${
                      selectedAmount === amount
                        ? "border-indigo-500 bg-indigo-500/10 text-indigo-400"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    ₹{amount.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div>
                <label className="block text-sm font-medium mb-2">Custom Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/60">₹</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 rounded-lg border border-white/10 bg-black/5 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Donation Category */}
            <div className="rounded-2xl border border-white/10 bg-black/5 p-6">
              <h2 className="text-xl font-semibold mb-4">Where would you like to give?</h2>
              <div className="space-y-3">
                {donationCategories.map((category) => (
                  <label key={category.id} className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={category.id}
                      checked={selectedCategory === category.id}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="mt-1"
                    />
                    <div>
                      <div className="font-medium">{category.title}</div>
                      <div className="text-sm text-foreground/70">{category.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Donor Information */}
            <div className="rounded-2xl border border-white/10 bg-black/5 p-6">
              <h2 className="text-xl font-semibold mb-4">Your Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name (Optional)</label>
                  <input
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/5 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email (Optional)</label>
                  <input
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-black/5 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Donation Summary */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-black/5 p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4">Donation Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-semibold">₹{getFinalAmount().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Category:</span>
                  <span className="font-semibold">
                    {donationCategories.find(c => c.id === selectedCategory)?.title}
                  </span>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span>₹{getFinalAmount().toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDonate}
                disabled={getFinalAmount() <= 0 || isProcessing}
                className="w-full mt-6 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                {isProcessing ? "Processing..." : "Donate Now"}
              </button>

              <p className="text-xs text-foreground/60 mt-4 text-center">
                Secure payment processing powered by Stripe
              </p>
            </div>

            {/* Payment Methods */}
            <div className="rounded-2xl border border-white/10 bg-black/5 p-6">
              <h3 className="font-semibold mb-3">Accepted Payment Methods</h3>
              <div className="flex items-center gap-4 text-sm text-foreground/70">
                <span>💳 Credit/Debit Cards</span>
                <span>🏦 Net Banking</span>
                <span>📱 UPI</span>
                <span>💰 Wallets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
