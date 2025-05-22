
import React, { useState } from 'react';
import SectionHeader from '../components/sections/SectionHeader';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';

interface DonationTier {
  id: string;
  amount?: number;
  title: string;
  description: string;
  isCustom?: boolean;
}

const donationTiers: DonationTier[] = [
  { id: 'tier1', amount: 25, title: '$25 - Seed Planter', description: 'Support our local outreach programs.' },
  { id: 'tier2', amount: 50, title: '$50 - Community Builder', description: 'Help fund educational materials for Matco.' },
  { id: 'tier3', amount: 100, title: '$100 - Hope Giver', description: 'Contribute to the care of children at New Promise Orphanage.' },
  { id: 'tier4', amount: 250, title: '$250 - Ministry Partner', description: 'Support the operational costs of Kingdom Faith-Based Hospital.' },
  { id: 'custom', title: 'Custom Amount', description: 'Give any amount God lays on your heart.', isCustom: true },
];

const GivePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<DonationTier | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleDonateClick = (tier: DonationTier) => {
    setSelectedTier(tier);
    if (tier.isCustom) setCustomAmount('');
    setIsModalOpen(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amountToDonate = selectedTier?.isCustom ? parseFloat(customAmount) : selectedTier?.amount;
    if (!amountToDonate || amountToDonate <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    // Placeholder for actual donation processing (e.g., PayPal, Stripe integration)
    alert(`Thank you for your generous donation of $${amountToDonate} towards "${selectedTier?.title}"! \n(This is a placeholder - no actual transaction occurred)`);
    setIsModalOpen(false);
  };

  return (
    <>
      <SectionHeader 
        title="Support Nehemia Ministry" 
        subtitle="'Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.' - 2 Corinthians 9:7"
      />

      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed">
          Your generous contributions enable us to continue spreading the Gospel, serving our communities, and expanding God's kingdom. Every gift, no matter the size, makes a significant impact. Thank you for partnering with us in this vital work.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {donationTiers.map(tier => (
            <div key={tier.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col justify-between items-center text-center hover:shadow-xl transition-shadow">
              {tier.amount && <div className="text-4xl font-bold text-amber-600 mb-2">${tier.amount}</div>}
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{tier.title}</h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">{tier.description}</p>
              <Button onClick={() => handleDonateClick(tier)} variant="primary" className="w-full">
                {tier.isCustom ? 'Give Custom Amount' : 'Donate Now'}
              </Button>
            </div>
          ))}
        </div>

        <div className="p-6 bg-sky-50 rounded-lg shadow border border-sky-200">
          <h3 className="text-2xl font-semibold text-sky-800 mb-3">Other Ways to Give</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Bank Transfer:</strong> Contact our office for bank details.</li>
            <li><strong>In-Person:</strong> Give during our services or at the church office.</li>
            <li><strong>M-Pesa (Kenya):</strong> Paybill Number XXXXXX, Account: YourName-Tithe/Offering. (Placeholder)</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-slate-700 mb-2">Financial Transparency</h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            Nehemia Ministry is committed to financial integrity and accountability. We ensure that all donations are used responsibly to further our mission. For more information on our finances, please contact our office.
          </p>
        </div>
      </div>

      {selectedTier && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`Donate: ${selectedTier.title}`}>
          <form onSubmit={handleModalSubmit} className="space-y-4">
            <p className="text-gray-700">{selectedTier.description}</p>
            {selectedTier.isCustom ? (
              <div>
                <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700">Enter Amount ($)</label>
                <input 
                  type="number" 
                  id="custom-amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  min="1"
                  step="any"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  placeholder="e.g., 75"
                />
              </div>
            ) : (
              <p className="text-2xl font-bold text-slate-800">Amount: ${selectedTier.amount}</p>
            )}
            {/* Placeholder for payment method selection */}
            <div className="pt-2">
              <p className="text-sm text-gray-500 mb-2">Select Payment Method (Placeholder):</p>
              <div className="flex space-x-4">
                <Button type="button" variant="outline" className="flex-1"><i className="fab fa-paypal mr-2"></i> PayPal</Button>
                <Button type="button" variant="outline" className="flex-1"><i className="fas fa-credit-card mr-2"></i> Card</Button>
              </div>
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button type="submit" variant="primary">Confirm Donation</Button>
            </div>
            <p className="text-xs text-gray-500 text-center">This is a simulated donation form. No real transaction will occur.</p>
          </form>
        </Modal>
      )}
    </>
  );
};

export default GivePage;
