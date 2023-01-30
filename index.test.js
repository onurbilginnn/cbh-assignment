import deterministicPartitionKey from ".";
import { TRIVIAL_PARTITION_KEY } from "./constants";

describe('Deterministic Partition Key Tests', () => {
    it('should return TRIVIAL_PARTITION_KEY', () => {
      const result = deterministicPartitionKey();
      expect(result).toBe(TRIVIAL_PARTITION_KEY);
    });

  });
  