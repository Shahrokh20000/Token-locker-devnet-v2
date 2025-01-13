// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


contract TokenLocker {
    address public feeRecipient = 0x1B958A48373109E9146A950a75F5bD25B845143b;
    uint256 public feePercentage = 500; // 0.05% fee

    mapping(address => uint256) public balances;

    event Deposit(address indexed user, uint256 amount);
    event Withdraw(address indexed user, uint256 amount, uint256 fee);

    function deposit() external payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external {
        require(amount > 0, "Withdraw amount must be greater than zero");
        require(balances[msg.sender] >= amount, "Insufficient balance");

        uint256 fee = (amount * feePercentage) / 10000;
        uint256 amountAfterFee = amount - fee;

        balances[msg.sender] -= amount;
        payable(feeRecipient).transfer(fee);
        payable(msg.sender).transfer(amountAfterFee);

        emit Withdraw(msg.sender, amountAfterFee, fee);
    }
}
